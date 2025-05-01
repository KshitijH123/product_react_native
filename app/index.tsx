import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

export default function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const router = useRouter();
  

  const handleVerifyNumber = () => {
    if (mobileNumber.length !== 10) {
      Alert.alert("Invalid Number", "Please enter a valid 10-digit mobile number.");
    } else {
      setShowOtpInput(true);
    }
  };

  const handleVerifyOtp = () => {
    if (otp === "000000") {
      
    router.replace("/home");
      Alert.alert("Success", "OTP verified successfully!");
    } else {
      Alert.alert("Invalid OTP", "The OTP you entered is incorrect.");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Enter Mobile Number</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: "100%",
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
        keyboardType="numeric"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      {!showOtpInput && (
        <Button title="Verify Number" onPress={handleVerifyNumber} />
      )}
      {showOtpInput && (
        <>
          <Text style={{ fontSize: 18, marginTop: 20 }}>Enter OTP</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              width: "100%",
              marginBottom: 10,
              paddingHorizontal: 10,
            }}
            keyboardType="numeric"
            placeholder="OTP"
            value={otp}
            onChangeText={setOtp}
          />
          <Button title="Verify OTP" onPress={handleVerifyOtp} />
        </>
      )}
    </View>
  );
}
