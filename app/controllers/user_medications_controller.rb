class UserMedicationsController < ApplicationController
    def index
        user_medications = UserMedication.all
        render json: user_medications, status: :ok
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

    def user_medication_params
        params.permit(:dose, :user_id, :medication_id)
    end
end
