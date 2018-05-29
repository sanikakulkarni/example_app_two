# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.views import View


class ExampleAppTwoView(View):

    def get(self, request):
        return render(request, 'example_app_two/example_app_two.html', {"data": "Example App Two"})
