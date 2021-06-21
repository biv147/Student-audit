"""DatabaseHelper URL Configuration
URLs that lead the the database-related endpoints direct to here
"""

from django.urls import path, include
from DatabaseHelper import views

# URLs that define the endpoints
urlpatterns = [
    path('login/', views.login),
    path('get_universities/', views.get_universities),
    path('get_plan/', views.get_plan),
    path('get_blank_plans/', views.get_blank_plans),
    path('select_plan/', views.select_plan),
    path('delete_plan/', views.withdraw_plan),
    path('update_plan/', views.update_plan),
    path('get_course_data/', views.get_course_data),
    path('add_review/', views.add_review),
    path('delete_review/', views.delete_review),
]