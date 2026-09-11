from rest_framework import routers
from django.urls import path, include
from .views import (
    ConstitutionVersionViewSet,
    PublicationViewSet,
    DecidedCaseViewSet,
    AdvisoryOpinionViewSet,
    EventViewSet,
    TrainingViewSet,
)

router = routers.DefaultRouter()
router.register(r'publications', PublicationViewSet)
router.register(r'decided-cases', DecidedCaseViewSet)
router.register(r'advisory-opinions', AdvisoryOpinionViewSet)
router.register(r'events', EventViewSet)
router.register(r'trainings', TrainingViewSet)
router.register(r'constitution-versions', ConstitutionVersionViewSet, basename='constitutionversion')

urlpatterns = [
    path('', include(router.urls)),
]
