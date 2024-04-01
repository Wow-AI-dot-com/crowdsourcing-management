from django.shortcuts import render


def frontend_fallback(request, *args, **kwargs):
    return render(request, 'base.html')
