class UserMedicationSerializer < ActiveModel::Serializer
  attributes :id, :dose, :medication_id, :user_id
  # has_one :medication
 

  def user_med
    UserMedication.find_by(user_id: current_user.id, medication_id: object.id)
  end
  
end
