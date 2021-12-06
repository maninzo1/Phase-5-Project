# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    private

    def current_user  
      User.last
    end
  
    def not_found(e) 
      render json: { error: e.message }, status: :not_found
    end
end