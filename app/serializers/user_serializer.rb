class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :age

  has_many :medication_notes
  has_many :user_medications
  has_many :medications
end
