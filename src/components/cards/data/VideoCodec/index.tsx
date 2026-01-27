import React from "react";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";

interface VideoCodecProps {
  /** The file video codec. */
  codec: VideoFile["video_codec"];
}

const VideoCodec: React.FC<
  DataComponentProps<VideoCodecProps> | DataComponentModalProps<VideoCodecProps>
> = (props) => {
  const intl = useIntl();
  const data =
    props.context === "modal"
      ? props.codec
      : getRenderData({
          data: props.codec,
          zoomIndex: {
            current: props.currentZoomIndex,
            user: props.userZoomIndex,
          },
        });

  if (!data) return null;

  const componentClass = "vui-card-data__video-codec";

  return (
    <span className={componentClass}>
      <span className="sr-only">
        {intl.formatMessage({ id: "video_codec" })}: {data}
      </span>
      <span aria-hidden>{data}</span>
    </span>
  );
};

export default VideoCodec;
