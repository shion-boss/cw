from django.urls import path
from . import views

urlpatterns = [
    path('portfolio1',views.p1_view,name='p1'),
    path('portfolio2',views.p2_view,name='p2'),

]
