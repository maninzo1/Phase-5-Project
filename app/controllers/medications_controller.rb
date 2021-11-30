class MedicationsController < ApplicationController
    def index
        medications = Medication.all
        render json: medications, status: :ok 
    end

    def show
        medication = Medication.find_by(id: params[:id])
        if medication
            render json: medication, status: :ok
        else
            render json: {error: "medication not found"}, status: :not_found
        end
    end
end
