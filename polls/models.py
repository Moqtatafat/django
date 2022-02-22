from email.policy import default
from django.db import models

# Create your models here.

class USRS(models.Model) :
    idDM = models.IntegerField()
    def __str__(self) :
        return str(self.id)

# from django.db import models


# class Question(models.Model):
#     question_text = models.CharField(max_length=200)
#     pub_date = models.DateTimeField('date published')


# class Choice(models.Model):
#     question = models.ForeignKey(Question, on_delete=models.CASCADE)
#     choice_text = models.CharField(max_length=200)
#     votes = models.IntegerField(default=0)