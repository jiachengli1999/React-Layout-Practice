from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.response import Response

from .models import image
from .serializer import imageSerializer

class ListMain(generics.ListCreateAPIView):
    queryset = image.objects.all()
    serializer_class = imageSerializer

class DetailMain(generics.RetrieveUpdateDestroyAPIView):
    queryset = image.objects.all()
    serializer_class = imageSerializer