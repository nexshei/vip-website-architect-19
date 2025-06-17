
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Calendar, MapPin, Phone, Mail, Users, Eye } from 'lucide-react';

interface MeetingRequest {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  event_type: string | null;
  event_date: string | null;
  location: string | null;
  protocol_officers: string | null;
  vision: string | null;
  status: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const [meetingRequests, setMeetingRequests] = useState<MeetingRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<MeetingRequest | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchMeetingRequests();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('meeting-requests-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'meeting_requests'
        },
        () => {
          fetchMeetingRequests();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchMeetingRequests = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('meeting_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error fetching requests",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setMeetingRequests(data || []);
    }
    setIsLoading(false);
  };

  const updateStatus = async (id: string, newStatus: string) => {
    const { error } = await supabase
      .from('meeting_requests')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Status updated",
        description: `Request status changed to ${newStatus}`,
      });
      fetchMeetingRequests();
    }
  };

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-luxury-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-gold mx-auto mb-4"></div>
          <p className="text-luxury-black">Loading meeting requests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-playfair font-bold text-luxury-black mb-2">
            Admin Dashboard
          </h1>
          <p className="text-luxury-black/70">Manage VVIP consultation requests</p>
        </div>

        <div className="grid gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-luxury-gold" />
                Meeting Requests ({meetingRequests.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {meetingRequests.length === 0 ? (
                <p className="text-center py-8 text-luxury-black/60">No meeting requests found.</p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Event Type</TableHead>
                        <TableHead>Event Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {meetingRequests.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{request.full_name}</div>
                              {request.location && (
                                <div className="text-sm text-luxury-black/60 flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {request.location}
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="space-y-1">
                              <div className="flex items-center gap-1 text-sm">
                                <Mail className="h-3 w-3" />
                                {request.email}
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Phone className="h-3 w-3" />
                                {request.phone}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div>
                              {request.event_type && (
                                <Badge variant="outline" className="mb-1">
                                  {request.event_type}
                                </Badge>
                              )}
                              {request.protocol_officers && (
                                <div className="text-sm text-luxury-black/60 flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  {request.protocol_officers} officers
                                </div>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            {request.event_date ? (
                              <span className="text-sm">
                                {new Date(request.event_date).toLocaleDateString()}
                              </span>
                            ) : (
                              <span className="text-luxury-black/40">Not specified</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(request.status)}>
                              {request.status || 'pending'}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm text-luxury-black/60">
                            {formatDate(request.created_at)}
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setSelectedRequest(request)}
                              >
                                <Eye className="h-3 w-3" />
                              </Button>
                              {request.status !== 'approved' && (
                                <Button
                                  size="sm"
                                  className="bg-green-600 hover:bg-green-700"
                                  onClick={() => updateStatus(request.id, 'approved')}
                                >
                                  Approve
                                </Button>
                              )}
                              {request.status !== 'rejected' && (
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => updateStatus(request.id, 'rejected')}
                                >
                                  Reject
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Request Details Modal */}
        {selectedRequest && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>Meeting Request Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-luxury-black/70">Full Name</label>
                    <p className="font-medium">{selectedRequest.full_name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-luxury-black/70">Email</label>
                    <p>{selectedRequest.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-luxury-black/70">Phone</label>
                    <p>{selectedRequest.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-luxury-black/70">Event Type</label>
                    <p>{selectedRequest.event_type || 'Not specified'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-luxury-black/70">Event Date</label>
                    <p>{selectedRequest.event_date ? new Date(selectedRequest.event_date).toLocaleDateString() : 'Not specified'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-luxury-black/70">Location</label>
                    <p>{selectedRequest.location || 'Not specified'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-luxury-black/70">Protocol Officers</label>
                    <p>{selectedRequest.protocol_officers || 'Not specified'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-luxury-black/70">Status</label>
                    <Badge className={getStatusColor(selectedRequest.status)}>
                      {selectedRequest.status || 'pending'}
                    </Badge>
                  </div>
                </div>
                {selectedRequest.vision && (
                  <div>
                    <label className="text-sm font-medium text-luxury-black/70">Vision/Requirements</label>
                    <p className="mt-1 p-3 bg-luxury-black/5 rounded-md">{selectedRequest.vision}</p>
                  </div>
                )}
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setSelectedRequest(null)}>
                    Close
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => {
                        updateStatus(selectedRequest.id, 'approved');
                        setSelectedRequest(null);
                      }}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        updateStatus(selectedRequest.id, 'rejected');
                        setSelectedRequest(null);
                      }}
                    >
                      Reject
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
