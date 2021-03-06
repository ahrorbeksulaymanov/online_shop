import React, { useEffect } from "react";
import { Checkbox, Dropdown, Menu } from "antd";
import "./style.scss";
import { BsChevronDown } from "react-icons/bs";

const FilterDropdown = ({
  name,
  type,
  data,
  setCheckedList,
  checkedList,
  setRefresh,
  refresh,
  isMobile,
}) => {
  const options = data?.map((i) => ({
    label: i?.percent ? i?.percent + "%" : i.name,
    value: i.id,
  }));

  const filterData = (e) => {
    if (type === "brend") {
      setCheckedList({
        brandId: e,
        discountId: checkedList.discountId,
        seasonId: checkedList.seasonId,
        sizeId: checkedList.sizeId,
        categoryId: checkedList.categoryId,
        colorId: checkedList.colorId,
        saleFrom: checkedList?.saleFrom,
        saleTo: checkedList?.saleTo,
      });
    } else if (type === "discount") {
      setCheckedList({
        brandId: checkedList.brandId,
        discountId: e,
        seasonId: checkedList.seasonId,
        sizeId: checkedList.sizeId,
        categoryId: checkedList.categoryId,
        colorId: checkedList.colorId,
        saleFrom: checkedList?.saleFrom,
        saleTo: checkedList?.saleTo,
      });
    } else if (type === "season") {
      setCheckedList({
        brandId: checkedList.brandId,
        discountId: checkedList.discountId,
        seasonId: e,
        sizeId: checkedList.sizeId,
        categoryId: checkedList.categoryId,
        colorId: checkedList.colorId,
        saleFrom: checkedList?.saleFrom,
        saleTo: checkedList?.saleTo,
      });
    } else if (type === "size") {
      setCheckedList({
        brandId: checkedList.brandId,
        discountId: checkedList.discountId,
        seasonId: checkedList.seasonId,
        sizeId: e,
        categoryId: checkedList.categoryId,
        colorId: checkedList.colorId,
        saleFrom: checkedList?.saleFrom,
        saleTo: checkedList?.saleTo,
      });
    } else if (type === "color") {
      setCheckedList({
        brandId: checkedList.brandId,
        discountId: checkedList.discountId,
        seasonId: checkedList.seasonId,
        sizeId: checkedList.sizeId,
        categoryId: checkedList.categoryId,
        colorId: e,
        saleFrom: checkedList?.saleFrom,
        saleTo: checkedList?.saleTo,
      });
    }
  };
  const changeData = () => {
    setRefresh(!refresh);
  };
  const menu = (
    <Menu className=" filter-checkbox">
      <Checkbox.Group
        options={options}
        onChange={(e) => filterData(e)}
        className="w-100"
      />
      {!isMobile && <button onClick={() => changeData()}>Filterlash</button>}
    </Menu>
  );

  return (
    <div style={isMobile ? { display: "inline-block", marginRight: "0px", width:"45%", margin:"0 2.5%"}:{ display: "inline-block", marginRight: "30px"}} className="filterDown_mobile">
      <Dropdown overlay={menu} trigger={["click"]}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className="ant-dropdown-link text-dark"
          onClick={(e) => e.preventDefault()}
        >
          {name} <BsChevronDown />
        </a>
      </Dropdown>
    </div>
  );
};
export default React.memo(FilterDropdown);
