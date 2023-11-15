import React, { PropsWithChildren, useEffect, useRef } from "react";
import { Group, MathUtils } from "three";
import { usePlacementOnGalleryItem, useGallery } from "react-gallery-3d";

const PlaceOnItem: React.FC<
  PropsWithChildren<{
    offset?: number;
    rotationY?: number; // in degrees
    isOnGround?: boolean;
  }>
> = ({ children, offset = 0, rotationY = 0, isOnGround }) => {
  const { position, orientation } = usePlacementOnGalleryItem(offset);
  const { height } = useGallery().item;

  const groupRef = useRef<Group>(null!);

  useEffect(() => {
    if (groupRef.current) {
      if (isOnGround) {
        position.y = -height / 2;
      }

      groupRef.current.position.copy(position);
      groupRef.current.lookAt(orientation);
      groupRef.current.rotateY(MathUtils.degToRad(rotationY));
    }
  }, [height, isOnGround, orientation, position, rotationY]);

  return <group ref={groupRef}>{children}</group>;
};

export default PlaceOnItem;
