import { Button, Grid, Group, Radio, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { CircleCheck } from "tabler-icons-react";
import CustomLoader from "../../../../Components/CustomLoader/CustomLoader";
import { axios_switch } from "../../../../Utils/Axios";

const CatModal = ({ row, setOpenCatModal, setUpdate }) => {
  const [value, setValue] = useState("react");
  const [Loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      misc: "",
    },
    validate: {
      misc: (value) => (value ? null : "Please Select CAT Type"),
    },
  });
  const handleSubmit = async (formValues) => {
    setLoading(true);
    const values = { ...formValues };
    try {
      let response = await axios_switch("put", {
        url: `/license/${row.id}`,
        data: values,
      });
      if (response.data?.data) {
        toast.success("CAT Added Successfully");
        setOpenCatModal(false);
        setUpdate(true);
      } else {
        setLoading(false);
        toast.error("Error Adding CAT Type");
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };
  return (
    <CustomLoader loading={Loading}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid>
          <Grid.Col md={12}>
            <Radio.Group
              value={value}
              label="Select CAT Type"
              withAsterisk
              {...form?.getInputProps("misc")}
            >
              <Group>
                <Radio value="CAT 2" label="CAT 2" my={5} />
                <Radio value="CAT 3" label="CAT 3" my={5} />
              </Group>
            </Radio.Group>
          </Grid.Col>
        </Grid>
        <Button
          type="submit"
          mt={"md"}
          mb={"md"}
          fullWidth
          leftIcon={<CircleCheck color="white" />}
        >
          Submit
        </Button>
      </form>
    </CustomLoader>
  );
};

export default CatModal;
