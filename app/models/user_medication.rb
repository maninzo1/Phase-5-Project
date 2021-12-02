class UserMedication < ApplicationRecord
  belongs_to :user
  belongs_to :medication
  # has_many :medication_notes
  # has_many :takens
end
