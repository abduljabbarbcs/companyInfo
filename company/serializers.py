
from django.contrib.auth.models import User
from rest_framework import serializers
from company.models import CompanyProject, CompanyClient, CompanyEmployee


class CompanyProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = CompanyProject
        fields = '__all__'


class CompanyClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = CompanyClient
        fields = '__all__'


class CompanyEmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = CompanyEmployee
        fields = '__all__'
