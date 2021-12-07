class MedicationNotesController < ApplicationController
    def index
        # medication_notes = MedicationNote.all
        render json: current_user.medication_notes, status: :ok
    end
    def create
        medication_note = current_user.medication_notes.create(medication_note_params)
        if medication_note.valid?
          render json: medication_note, status: :created
        else
          render json: { errors: medication_note.errors }, status: :unprocessable_entity
        end
      end

    def show
        medication_note = MedicationNote.find_by(id: params[:id])
        if medication_note
            render json: medication_note, status: :ok
        else
            render json: {error: "medication note not found"}, status: :not_found
        end
    end

    def update
        medication_note = MedicationNote.find_by(id:params[:id])
        if medication_note
            MedicationNote.update(medication_note_params)
            render json: medication_note, status: :accepted
        else
            render json: {error: "user medication note not found"}, status: :not_found
        end
    end

    def destroy
        medication_note = MedicationNote.find(params[:id])
        if medication_note
            medication_note.destroy
        head :no_content

    else 
        render json: {error: "user medication note not found"}, status: :not_found
    end
        
    end

    def medication_note_params
        params.permit(:user_medication_id, :content)
    end
end


