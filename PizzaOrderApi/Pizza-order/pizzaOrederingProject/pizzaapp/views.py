from rest_framework.generics import CreateAPIView,ListAPIView,RetrieveAPIView,DestroyAPIView,UpdateAPIView
from rest_framework.views import APIView
from django.http import JsonResponse

from .models import PizzaModel,OrderPizza
from .serializers import PizzaSerializer,OrderSerializer,MyOrderSerializer

class PizzaListApiView(ListAPIView):
  queryset=PizzaModel.objects.all()
  serializer_class=PizzaSerializer

class PizzaDetailApiView(RetrieveAPIView):
  queryset=PizzaModel.objects.all()
  serializer_class=PizzaSerializer

class OrderCreateApi(CreateAPIView):
  queryset=OrderPizza.objects.all()
  serializer_class=OrderSerializer

class OrdersForUserApiView(APIView):
  serializer_class=MyOrderSerializer
  def post(self,request,format=None):
    user=request.data.get('user')
    myorders=OrderPizza.objects.filter(user=user)
    ord={}
    s=0
    for i in myorders:
      new={}
      new['user']=i.user
      new['pizza']=i.pizza
      new['num_of_pizza']=i.num_of_pizza
      ord[str(s)]=new
      s+=1
    return JsonResponse({'user':(ord)})