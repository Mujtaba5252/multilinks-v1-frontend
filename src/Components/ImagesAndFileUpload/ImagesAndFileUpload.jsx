import React, { useEffect, useState } from "react";

import { Dropzone } from "@mantine/dropzone";

import {
  Button,
  FileInput,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { CloudUpload, FileAnalytics } from "tabler-icons-react";
import toast from "react-hot-toast";
const ImagesAndFileUpload = (props) => {
  // current props being passed are

  // 5. allMedia
  // 6. setAllMedia

  // 7. indexOfCoverMediaURL
  // 8. setIndexOfCoverMediaURL
  // 13. type
  // 14. format
  // 15. multiple
  // 16. title

  const [refresh, setRefresh] = useState(false);
  const previews = props?.allMedia?.map((file, index) => {
    // temporary function to convert pre existing urls to object of urls
    if (typeof file === "string") {
      file = {
        path: file,
        name: "Document " + (index + 1),
        uploaded: true,
      };
    } else if (typeof file === "object" && file?.uploaded) {
      file = {
        path: file.path,
        name: file.name,
        uploaded: true,
      };
    }

    let display = file.path;
    if (!file?.uploaded) {
      display = URL?.createObjectURL(file);
    }
    return (
      <div
        key={index}
        style={{
          alignContent: "center",
          MozWindowDragging: "no-drag",
        }}
      >
        <div>
          {props.type === "images" || props.type === "image" ? (
            <Image
              onClick={() => {
                props.setIndexOfCoverMediaURL(index);
              }}
              key={index}
              src={display}
              width="100%"
              height={props.cols === 1 ? 300 : 120}
              radius={20}
              mx="auto"
              style={{
                cursor: "pointer",
                border:
                  parseInt(props.indexOfCoverMediaURL) === index
                    ? "4px solid red"
                    : "",
              }}
              imageProps={{
                onLoad: () => URL.revokeObjectURL(file),
              }}
            />
          ) : props.type === "document" ? (
            <FileInput
              disabled
              mt="xl"
              icon={<FileAnalytics size={25} />}
              size="xl"
              placeholder={file.name}
            />
          ) : props.type === "videos" ? (
            <video
              key={index}
              style={{
                width: "100%",

                height: "100%",
              }}
              controls
              src={display}
            />
          ) : null}

          <Group position="center">
            <Button
              hidden={props.disabled}
              fullWidth
              mt="sm"
              size="sm"
              compact
              color="red"
              onClick={() => {
                if (props.type === "images") {
                  if (props.allMedia.length !== 0) {
                    if (props.indexOfCoverMediaURL === index) {
                      props.setIndexOfCoverMediaURL(0);
                    } else if (props.indexOfCoverMediaURL > index) {
                      props.setIndexOfCoverMediaURL(
                        props.indexOfCoverMediaURL - 1
                      );
                    }
                  } else {
                    props.setIndexOfCoverMediaURL(null);
                  }
                }

                props.setAllMedia((compare) =>
                  compare.filter((_, i) => i !== index)
                );
              }}
            >
              Remove
            </Button>
          </Group>
        </div>
      </div>
    );
  });

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh]);

  const matches = useMediaQuery("(max-width: 500px)");
  const CoverMediaPreview = () => {
    // temporary function to convert pre existing urls to object of urls
    let coverImage = props.allMedia[props.indexOfCoverMediaURL];
    if (typeof coverImage === "string") {
      coverImage = {
        path: coverImage,
        uploaded: true,
      };
    }
    // if cover image is of type file (recently uploaded file)
    if (!coverImage?.uploaded) {
      coverImage = {
        path: URL.createObjectURL(coverImage),
        uploaded: false,
      };
    }

    return (
      <Image
        // style={{
        //   cursor: "pointer",
        // }}
        src={coverImage?.path}
        width="100%"
        height={300}
        radius={20}
        mx="auto"
        withPlaceholder={props.allMedia.length === 0 ? true : false}
      />
    );
  };

  return (
    <div>
      <Grid>
        <Grid.Col
          lg={props?.allMedia?.length > 0 && props.type === "images" ? 9 : 12}
          style={{
            transition: "1s",
          }}
        >
          <Paper>
            <Dropzone
              hidden={props.disabled}
              disabled={props.disabled}
              maxSize={20 * 1024 ** 2}
              accept={props.format}
              onReject={() => {
                showNotification({
                  color: "red",
                  title: `ERROR`,

                  message: `FILE SIZE IS TOO LARGE OR FILE TYPE IS NOT SUPPORTED`,
                });
              }}
              // mt={"xl"}
              radius={"md"}
              multiple={props.multiple}
              activateOnDrag={false}
              ///////////////////////////////////////////////////////////////////////////////////////////////
              onDrop={(newMedias) => {
                if (props.multiple) {
                  let newFilteredMedia = [];
                  let showDuplicateAlert = false;

                  newMedias?.map((newMedia) => {
                    let addMedia = true;
                    props?.allMedia?.map((media) => {
                      if (
                        newMedia.path == media.path ||
                        (newMedia.name == media.name &&
                          newMedia.size == media.size)
                      ) {
                        showDuplicateAlert = true;

                        addMedia = false;
                      }
                    });
                    if (addMedia) {
                      newFilteredMedia.push(newMedia);
                    }
                  });
                  if (showDuplicateAlert) {
                    toast({
                      color: "yellow",
                      title: `IT'S ALREADY THERE!!`,

                      message: `DUPLICATE FILE NOT ADDED`,
                    });
                  }

                  props.setAllMedia((prevMedia) => [
                    ...prevMedia,
                    ...newFilteredMedia,
                  ]);
                } else {
                  props.setAllMedia(newMedias);
                }
              }}
            >
              {!matches ? (
                <Group position="center">
                  <CloudUpload size={40} color="gray" />
                  <Stack spacing={0}>
                    <Text align="center">{props.title}</Text>
                    <Text color={"gray"} align="center">
                      File size no more than 20 MB
                    </Text>
                  </Stack>
                </Group>
              ) : (
                <Group position="center">
                  <CloudUpload size={40} color="gray" />
                  <Text align="center">{props.title}</Text>
                </Group>
              )}
            </Dropzone>
            <SimpleGrid
              cols={props.cols}
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
              mt={previews.length > 0 && !props.disabled ? "xl" : 0}
            >
              {previews}
            </SimpleGrid>
          </Paper>
        </Grid.Col>
        {props.allMedia?.length > 0 && props.type === "images" && (
          <Grid.Col lg={3}>
            <Text weight="bold" size="xl" py="md">
              Cover Image
            </Text>
            <Paper>
              <CoverMediaPreview />
            </Paper>
          </Grid.Col>
        )}
      </Grid>
    </div>
  );
};

export default ImagesAndFileUpload;
