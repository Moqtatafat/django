from django.shortcuts import render

from . import data

# Create your views here.

host = 'http://127.0.0.1:5000/'

def home(request, *args, **kwargs) :
    context = {
        'host': host,
    }
    return render(request, '20220730000000000001_HOME.html', context)

def library(request, *args, **kwargs) :
    context = {
        'host': host,
        'qdrt': data.QODRAT,
    }
    return render(request, '20220730000000000002_LIBRARY.html', context)

def quizes(request, *args, **kwargs) :
    context = {
        'host': host,
    }
    return render(request, '20220730000000000003_QUIZES.html', context)

def quiz(request, *args, **kwargs) :
    context = {
        'host': host,
    }
    return render(request, '20220730000000000004_QUIZ.html', context)

def calculator(request, *args, **kwargs) :
    context = {
        'host': host,
    }
    return render(request, '20220730000000000005_CALCULATOR.html', context)

def about(request, *args, **kwargs) :
    context = {
        'host': host,
    }
    return render(request, '20220730000000000006_ABOUT.html', context)