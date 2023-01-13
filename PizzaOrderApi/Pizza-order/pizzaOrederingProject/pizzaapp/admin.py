from django.contrib import admin
from .models import PizzaModel,OrderPizza
# Register your models here.
admin.site.register(PizzaModel)
admin.site.register(OrderPizza)