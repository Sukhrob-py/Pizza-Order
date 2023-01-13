from django.urls import path

from .views import PizzaListApiView,OrderCreateApi,PizzaDetailApiView,OrdersForUserApiView

urlpatterns=[
  path('pizza/list/',PizzaListApiView.as_view()),
  path('pizza/list/<int:pk>',PizzaDetailApiView.as_view()),
  path('order/',OrderCreateApi.as_view()),
  path('myorders/',OrdersForUserApiView.as_view()),
]