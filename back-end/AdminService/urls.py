"""DatabaseHelper URL Configuration
URLs that lead the the database-related endpoints direct to here
"""

from django.urls import path, include
from AdminService import views

# URLs that define the endpoints
urlpatterns = [
    path('login/', views.login),
    path('get_students/', views.get_students),
    path('remove_student/', views.remove_student),
    path('add_student/', views.add_student),
]