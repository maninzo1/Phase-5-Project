class UserMedicationsController < ApplicationController
    def index
        # user_medications = UserMedication.all
        render json: current_user.user_medications, status: :ok
    end
    def create
        user_medication = current_user.user_medications.create(user_medication_params)
        if user_medication.valid?
          render json: user_medication, status: :created
        else
          render json: { errors: user_medication.errors }, status: :unprocessable_entity
        end
      end

    def show
        user_medication = UserMedication.find_by(id: params[:id])
        if user_medication
            render json: user_medication, status: :ok
        else
            render json: {error: "medication not found"}, status: :not_found
        end
    end

    def update
        user_medication = UserMedication.find_by(id:params[:id])
        if user_medication
            UserMedication.update(user_medication_params)
            render json: user_medication, status: :accepted
        else
            render json: {error: "user medication not found"}, status: :not_found
        end
    end

    def destroy
        user_medication = UserMedication.find(params[:id])
        if user_medication
            user_medication.destroy
        head :no_content

    else 
        render json: {error: "user medication not found"}, status: :not_found
    end
        
    end

    def user_medication_params
        params.permit(:id, :user_id, :medication_id)
    end
end

