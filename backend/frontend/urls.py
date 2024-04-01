from django.urls import re_path, path
from django.views.static import serve

import core.settings
from frontend import views

urlpatterns = [
    re_path(r'^static/(?P<path>.*)$', serve,
            kwargs={'document_root': core.settings.BASE_DIR.parent.joinpath("frontend/build/static"),
                    'show_indexes': True}),
    re_path(r'^', views.frontend_fallback, name='frontend_fallback'),
]

