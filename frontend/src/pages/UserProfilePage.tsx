import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";



const UserProfilePage = () => {
  const { currentUser, isLoading} = useGetMyUser();
  const {updateUser, isPending} =useUpdateMyUser();

  if (isLoading){
    return <span>Loading...</span>
  }

  if(!currentUser){
    return <span>Unable to load user profile</span>
  }

  return (
    <div>
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isPending={isPending}
      />
    </div>
  );
}

export default UserProfilePage;