# import os
# from django.http import FileResponse, Http404
# from rest_framework import viewsets
# from rest_framework.decorators import action
# from .models import Publication, DecidedCase, AdvisoryOpinion, Event, Training
# from .serializers import (
#     PublicationSerializer,
#     DecidedCaseSerializer,
#     AdvisoryOpinionSerializer,
#     EventSerializer,
#     TrainingSerializer,
# )


# from rest_framework.permissions import IsAuthenticatedOrReadOnly


# class PublicationViewSet(viewsets.ModelViewSet):
#     queryset = Publication.objects.all().order_by('-published_at')
#     serializer_class = PublicationSerializer
#     permission_classes = [IsAuthenticatedOrReadOnly]


# class DecidedCaseViewSet(viewsets.ModelViewSet):
#     queryset = DecidedCase.objects.all().order_by('-case_date')
#     serializer_class = DecidedCaseSerializer


# class AdvisoryOpinionViewSet(viewsets.ModelViewSet):
#     queryset = AdvisoryOpinion.objects.all().order_by('-issued_at')
#     serializer_class = AdvisoryOpinionSerializer


# class EventViewSet(viewsets.ModelViewSet):
#     queryset = Event.objects.all().order_by('start_date')
#     serializer_class = EventSerializer


# class TrainingViewSet(viewsets.ModelViewSet):
#     queryset = Training.objects.all().order_by('date')
#     serializer_class = TrainingSerializer






import os
from django.http import FileResponse, Http404
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import ConstitutionVersion, Publication, DecidedCase, AdvisoryOpinion, Event, Training
from .serializers import (
    ConstitutionVersionSerializer,
    PublicationSerializer,
    DecidedCaseSerializer,
    AdvisoryOpinionSerializer,
    EventSerializer,
    TrainingSerializer,
)


class PublicationViewSet(viewsets.ModelViewSet):
    queryset = Publication.objects.all().order_by('-published_at')
    serializer_class = PublicationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    # 🌟 NEW ACTION: Maps directly to GET /api/publications/<id>/download/
    @action(detail=True, methods=['get'])
    def download(self, request, pk=None):
        publication = self.get_object()
        
        # 1. Validation check ensuring a file path string exists inside the active row cell
        if not publication.pdf_file:
            raise Http404("No PDF file asset has been uploaded to this specific registry index record.")
            
        # 2. Check if the physical file asset exists on your local disk storage array
        if not os.path.exists(publication.pdf_file.path):
            raise Http404("The requested PDF file asset is missing on the server hardware storage.")
            
        # 3. Open the binary stream and safely transfer it down to the React application client layer
        return FileResponse(
            open(publication.pdf_file.path, 'rb'), 
            as_attachment=True, 
            content_type='application/pdf'
        )


class DecidedCaseViewSet(viewsets.ModelViewSet):
    queryset = DecidedCase.objects.all().order_by('-case_date')
    serializer_class = DecidedCaseSerializer


class AdvisoryOpinionViewSet(viewsets.ModelViewSet):
    queryset = AdvisoryOpinion.objects.all().order_by('-issued_at')
    serializer_class = AdvisoryOpinionSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('-published_at')
    serializer_class = EventSerializer


class TrainingViewSet(viewsets.ModelViewSet):
    queryset = Training.objects.all().order_by('-published_at')
    serializer_class = TrainingSerializer



class ConstitutionVersionViewSet(viewsets.ModelViewSet):
    queryset = ConstitutionVersion.objects.all()
    serializer_class = ConstitutionVersionSerializer
    