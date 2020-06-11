class UserSerializer < ActiveModel::Serializer
  attributes :username, :island_name, :profile_pic
end
