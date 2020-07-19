from django.shortcuts import render,redirect

# Create your views here.
def p1_view(request):
    return render(request,'portfolio/portfolio1.html')


def p2_view(request):
    return render(request,'portfolio/portfolio2.html')
