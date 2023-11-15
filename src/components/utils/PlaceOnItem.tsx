import React, { PropsWithChildren, useEffect, useRef } from "react";
import { Group, MathUtils } from "three";
import { usePlacementOnGalleryItem } from "react-gallery-3d";

const PlaceOnItem: React.FC<
  PropsWithChildren<{
    offset?: number;
    rotationY?: number; // in degrees
  }>
> = ({ children, offset = 0, rotationY = 0 }) => {
  const { position, orientation } = usePlacementOnGalleryItem(offset);
  const groupRef = useRef<Group>(null!);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.copy(position);
      groupRef.current.lookAt(orientation);
      groupRef.current.rotateY(MathUtils.degToRad(rotationY));
    }
  }, [orientation, position, rotationY]);

  return <group ref={groupRef}>{children}</group>;
};

export default PlaceOnItem;
