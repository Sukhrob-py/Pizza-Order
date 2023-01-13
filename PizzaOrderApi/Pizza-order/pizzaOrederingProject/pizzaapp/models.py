from django.db import models

# Create your models here.

class Category(models.Model):
  name=models.CharField(max_length=255)

  def __str__(self):
    return self.name

class PizzaModel(models.Model):
  name=models.CharField(max_length=255,unique=True)
  cost=models.CharField(max_length=255)
  desc=models.TextField()
  photo=models.ImageField(upload_to='pizzas')
  def __str__(self):
    return self.name


class OrderPizza(models.Model):
  user=models.CharField(max_length=255)
  pizza=models.CharField(max_length=255)
  num_of_pizza=models.CharField(max_length=255)
  cost=models.CharField(max_length=255)
  phone_num=models.CharField(max_length=100)
  location=models.CharField(max_length=255)

  def __str__(self):
    return self.pizza+" - "+self.user
