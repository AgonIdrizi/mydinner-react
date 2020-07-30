import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 64, color:"orange" }} spin />;

const spin = props => <Spin indicator={antIcon} />

export default spin;
