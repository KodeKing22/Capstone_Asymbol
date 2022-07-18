from django.contrib import admin
from django.urls import path, include
from guest import views

urlpatterns = [
    path('', views.user_guests),
    path('all/', views.get_all_guests),
]