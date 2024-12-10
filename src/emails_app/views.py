from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ApplicationSerializer
from django.shortcuts import render
from django.http import JsonResponse
import logging

# Configure logging
logger = logging.getLogger(__name__)

def home(request):
    return render(request, 'home.html')

def format_response(success, message, data=None, status_code=200):
    """
    Standardize API response format
    
    :param success: Boolean indicating if the request was successful
    :param message: Descriptive message about the request
    :param data: Optional data to be returned
    :param status_code: HTTP status code
    :return: Response object with standardized format
    """
    response_data = {
        'success': success,
        'message': message,
        'data': data
    }
    return Response(response_data, status=status_code)

@api_view(['POST'])
def apply_mjml(request):
    try:
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            return format_response(
                success=True, 
                message='Application submitted successfully for MJML template',
                data=serializer.validated_data
            )
        
        # Combine all validation errors into a single message
        error_messages = []
        for field, errors in serializer.errors.items():
            error_messages.extend([f"{field.replace('_', ' ').title()}: {error}" for error in errors])
        
        return format_response(
            success=False, 
            message='. '.join(error_messages),
            status_code=status.HTTP_400_BAD_REQUEST
        )
    except Exception as e:
        logger.error(f"Error in apply_mjml: {str(e)}")
        return format_response(
            success=False, 
            message='An unexpected error occurred',
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def apply_react_email(request):
    try:
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            return format_response(
                success=True, 
                message='Application submitted successfully for React Email template',
                data=serializer.validated_data
            )
        
        # Combine all validation errors into a single message
        error_messages = []
        for field, errors in serializer.errors.items():
            error_messages.extend([f"{field.replace('_', ' ').title()}: {error}" for error in errors])
        
        return format_response(
            success=False, 
            message='. '.join(error_messages),
            status_code=status.HTTP_400_BAD_REQUEST
        )
    except Exception as e:
        logger.error(f"Error in apply_react_email: {str(e)}")
        return format_response(
            success=False, 
            message='An unexpected error occurred',
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def apply_maizzle(request):
    try:
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            return format_response(
                success=True, 
                message='Application submitted successfully for Maizzle template',
                data=serializer.validated_data
            )
        
        # Combine all validation errors into a single message
        error_messages = []
        for field, errors in serializer.errors.items():
            error_messages.extend([f"{field.replace('_', ' ').title()}: {error}" for error in errors])
        
        return format_response(
            success=False, 
            message='. '.join(error_messages),
            status_code=status.HTTP_400_BAD_REQUEST
        )
    except Exception as e:
        logger.error(f"Error in apply_maizzle: {str(e)}")
        return format_response(
            success=False, 
            message='An unexpected error occurred',
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def apply_inky(request):
    try:
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            return format_response(
                success=True, 
                message='Application submitted successfully for Inky template',
                data=serializer.validated_data
            )
        
        # Combine all validation errors into a single message
        error_messages = []
        for field, errors in serializer.errors.items():
            error_messages.extend([f"{field.replace('_', ' ').title()}: {error}" for error in errors])
        
        return format_response(
            success=False, 
            message='. '.join(error_messages),
            status_code=status.HTTP_400_BAD_REQUEST
        )
    except Exception as e:
        logger.error(f"Error in apply_inky: {str(e)}")
        return format_response(
            success=False, 
            message='An unexpected error occurred',
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

@api_view(['POST'])
def apply_heml(request):
    try:
        serializer = ApplicationSerializer(data=request.data)
        if serializer.is_valid():
            return format_response(
                success=True, 
                message='Application submitted successfully for HEML template',
                data=serializer.validated_data
            )
        
        # Combine all validation errors into a single message
        error_messages = []
        for field, errors in serializer.errors.items():
            error_messages.extend([f"{field.replace('_', ' ').title()}: {error}" for error in errors])
        
        return format_response(
            success=False, 
            message='. '.join(error_messages),
            status_code=status.HTTP_400_BAD_REQUEST
        )
    except Exception as e:
        logger.error(f"Error in apply_heml: {str(e)}")
        return format_response(
            success=False, 
            message='An unexpected error occurred',
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
