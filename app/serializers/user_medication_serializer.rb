class UserMedicationSerializer < ActiveModel::Serializer
  attributes :id, :dose, :medication_id, :user_id
  # has_one :medication
  belongs_to :user
  belongs_to :medication

  def user_med
    UserMedication.find_by(user_id: current_user.id, medication_id: object.id)
  end
  

end