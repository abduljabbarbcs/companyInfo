from django.shortcuts import render
from django.views import View



from django.contrib.auth.models import User
from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.response import Response
from  company.serializers import CompanyProjectSerializer, CompanyEmployeeSerializer, CompanyClientSerializer
from company.models import CompanyClient, CompanyProject, CompanyEmployee
# API VIEWS, V1
from django.conf import settings

# Create your views here.
class IndexView(View):
    """
    Renders angular app.
    """
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html',{})


class CompanyProjectViewSet(ModelViewSet):
    """
    List, create, retrieve, update, or delete Company  Projects.
    """
    queryset = CompanyProject.objects.all()
    serializer_class = CompanyProjectSerializer


class CompanyClientViewSet(ModelViewSet):
    """
    List, create, retrieve, update, or delete Company  Clients.
    """
    queryset = CompanyClient.objects.all()
    serializer_class = CompanyClientSerializer

class CompanyEmployeeViewSet(ModelViewSet):
    """
    List, create, retrieve, update, or delete Company  Employees.
    """
    queryset = CompanyEmployee.objects.all()
    serializer_class = CompanyEmployeeSerializer


