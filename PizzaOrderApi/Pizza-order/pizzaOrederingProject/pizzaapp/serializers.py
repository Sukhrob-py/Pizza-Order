from rest_framework.serializers import ModelSerializer

from .models import PizzaModel,OrderPizza

class PizzaSerializer(ModelSerializer):
  class Meta:
    model=PizzaModel
    fields="__all__"
    read_only=True
  
class OrderSerializer(ModelSerializer):
  class Meta:
    model=OrderPizza
    fields="__all__"

class MyOrderSerializer(ModelSerializer):
  class Meta:
    model=OrderPizza
    fields=["user"]