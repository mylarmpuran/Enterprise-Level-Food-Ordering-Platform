import { useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";



const UserProfilePage = () => {

  const {updateUser, isPending} =useUpdateMyUser();
  return(
    <div><UserProfileForm onSave={updateUser} isPending={isPending}/></div>
    
  )
}

export default UserProfilePage;