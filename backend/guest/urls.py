from django.urls import path, include
from guest import views

urlpatterns = [
    path('', views.user_guests),
    path('all/', views.get_all_guests),
    path('phonenumber/<int:phonenumber>/', views.get_by_phone_number),
    path('date/<str:dateofvisit>/', views.get_by_date),
    path('delete/<int:pk>/', views.delete_by_id),
    path('update/<int:phonenumber>/', views.update_by_phone_number),

]
