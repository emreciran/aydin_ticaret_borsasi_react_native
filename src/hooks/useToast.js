import Toast from "react-native-toast-message";

const useToast = () => {
  function showToast(text1, text2, type) {
    Toast.show({
      type,
      text1,
      text2,
    });
  }

  return [{ showToast }];
};

export default useToast;
