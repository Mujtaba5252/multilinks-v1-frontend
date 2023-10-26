import React from "react";
import {
  Title,
  Flex,
  Container,
  Grid,
  TextInput,
  Text,
  Input,
  PasswordInput,
  Avatar,
  Group,
} from "@mantine/core";
import { Cloud, UserCircle } from "tabler-icons-react";
import { MainBlue } from "../../../../../../Utils/ThemeColors";
import ImagesAndFileUpload from "../../../../../../Components/ImagesAndFileUpload/ImagesAndFileUpload";
import { MIME_TYPES } from "@mantine/dropzone";
import { useMediaQuery } from "@mantine/hooks";

function CreateLogin({
  form3,
  confirmPassword,
  ConfirmPassword,
  attachments,
  setAttachments,
  profile,
  setProfile,
  show,
}) {
  const matches = useMediaQuery("(max-width: 760px)");
  return (
    <Grid>
      <Grid.Col md={6} sm={12} style={{ height: "100%" }}>
        <Container
          mih={415}
          mt={10}
          style={{ borderRadius: "10px", boxShadow: "0px 0px 5px 2px #D3D3D3" }}
        >
          <Grid>
            <Grid.Col md={12} sm={12}>
              <Title mt={10} color={MainBlue()}>
                Create Login
              </Title>
            </Grid.Col>
            <Grid.Col md={12} sm={12}>
              <TextInput
                form={form3}
                withAsterisk
                {...form3?.getInputProps("login_email")}
                size="md"
                label="Email"
                placeholder="Enter Email"
              />
            </Grid.Col>
            <Grid.Col md={12} sm={12}>
              <PasswordInput
                form={form3}
                withAsterisk
                onInput={() => ConfirmPassword(undefined)}
                {...form3?.getInputProps("login_password")}
                size="md"
                label="Password"
                placeholder="Enter Password"
              />
            </Grid.Col>
            <Grid.Col md={12} sm={12}>
              <PasswordInput
                withAsterisk
                onInput={(event) => ConfirmPassword(event.target.value)}
                size="md"
                label="Confirm Password"
                placeholder="Confirm Password"
              />
              <Text color={confirmPassword ? "green" : "red"}>
                {confirmPassword ? "Password Matched" : "Password Not Matched"}
              </Text>
            </Grid.Col>
          </Grid>
        </Container>
      </Grid.Col>
      <Grid.Col md={6} sm={12}>
        {!show ? (
          <>
            <Text color={MainBlue()} mb={10} fw={"bold"}>
              Profile Picture
            </Text>
            <Input.Wrapper>
              <ImagesAndFileUpload
                allMedia={profile}
                setAllMedia={setProfile}
                format={[MIME_TYPES.jpeg, MIME_TYPES.png]}
                type="image"
                cols={3}
                multiple={true}
                title="Profile Picture"
              />
            </Input.Wrapper>
          </>
        ) : (
          <Group position="center" mt={matches ? 30 : 60}>
            <Avatar src={show} size={matches ? 200 : 300} radius={"50%"} />
          </Group>
        )}
      </Grid.Col>
      <Grid.Col span={12} md={12} mt={20}>
        <Input.Wrapper>
          <ImagesAndFileUpload
            allMedia={attachments}
            setAllMedia={setAttachments}
            format={[MIME_TYPES.doc, MIME_TYPES.pdf]}
            type="document"
            cols={4}
            multiple={true}
            title="Attachments"
          />
        </Input.Wrapper>
      </Grid.Col>
    </Grid>
  );
}

export default CreateLogin;
