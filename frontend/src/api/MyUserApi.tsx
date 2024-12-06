import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {

  const { getAccessTokenSilently } = useAuth0();

  const createMyUserRequest = async(user: CreateUserRequest) => {
    const accessToken = await getAccessTokenSilently();

    console.log(accessToken);
    
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      
    });

    console.log("i am ok")
    console.log(response)

    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };
  console.log("i am 2 ok")

  const {
    mutateAsync: createUser,
    isPending,
    isError,
    isSuccess,
  } = useMutation({mutationFn:createMyUserRequest});

  return{
    createUser,
    isPending,
    isError,
    isSuccess,
  }
};

type UpdateMyUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export const useUpdateMyUser = () => {

      const { getAccessTokenSilently } = useAuth0();
      const UpdateMyUserRequest = async(formData: UpdateMyUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        console.log(accessToken);

        
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
        method:"PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
        });     
        console.log(response);
        if(!response.ok){
          throw new Error("Failed to update user")
        }
        return response.json();
    };

    const {
      mutateAsync: updateUser,
      isPending,
      isSuccess,
      error,
      reset,
    } = useMutation({mutationFn:UpdateMyUserRequest});

    if(isSuccess){
      toast.success("User profile updated!")
    }

    if(error){
      toast.error(error.toString());
      reset();
    }

    return { updateUser, isPending, isSuccess,isError,reset,error};
};
