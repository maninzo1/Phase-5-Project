class TakensController < ApplicationController
    def index
        # user_medications = UserMedication.all
        render json: current_user.takens, status: :ok
    end
    def create
        taken = current_user.takens.create(taken_params)
        if taken.valid?
          render json: taken, status: :created
        else
          render json: { errors: taken.errors }, status: :unprocessable_entity
        end
      end

    def show
        taken = Taken.find_by(id: params[:id])
        if taken
            render json: taken, status: :ok
        else
            render json: {error: "taken medication not found"}, status: :not_found
        end
    end

    def update
        taken = Taken.find_by(id:params[:id])
        if taken
            Taken.update(taken_params)
            render json: taken, status: :accepted
        else
            render json: {error: "taken medication not found"}, status: :not_found
        end
    end

    def destroy
        taken = Taken.find(params[:id])
        if taken
            taken.destroy
        head :no_content

    else 
        render json: {error: "taken medication not found"}, status: :not_found
    end
        
    end

    def taken_params
        params.permit(:id, :user_id, :user_medication_id)
    end
end



