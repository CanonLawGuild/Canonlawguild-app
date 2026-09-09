from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


@api_view(['GET'])
@permission_classes([AllowAny])
def api_root_status(request):
    return Response({'status': 'ok'})


urlpatterns = [
    path('token-auth/', obtain_auth_token, name='api_token_auth'),
    path('status/', api_root_status, name='api_status'),
]
