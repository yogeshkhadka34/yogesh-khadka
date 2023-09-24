import StaticImageOptimized, {
  ExportedImageProps,
} from "next-image-export-optimizer";

import React from "react";

const StaticImage: React.FC<ExportedImageProps> = (props) => {
  return <StaticImageOptimized {...props} />;
};

export default StaticImage;
