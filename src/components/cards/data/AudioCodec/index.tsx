import React from "react";
import { useIntl } from "react-intl";
import { getRenderData } from "@/helpers";

interface AudioCodecProps {
  /** The file audio codec. */
  codec: VideoFile["audio_codec"];
}

const AudioCodec: React.FC<
  DataComponentProps<AudioCodecProps> | DataComponentModalProps<AudioCodecProps>
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

  const componentClass = "vui-card-data__audio-codec";

  return (
    <span className={componentClass}>
      <span className="sr-only">
        {intl.formatMessage({ id: "audio_codec" })}: {data}
      </span>
      <span aria-hidden>{data}</span>
    </span>
  );
};

export default AudioCodec;
