import React, { Suspense } from "react";
import { routes } from "../../services/routes";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import Spinner from "../../components/Spinner";
import AdminOrderList from "../../components/AdminOrderList/AdminOrderList";
import forExmCreateProd from "./forExmCreateProd";
import AdminUpdateList from "../../components/AdminUpdateList";
import styles from "./AdminPage.module.css";

export default function AdminPage() {
  // console.log("orders:", orders);
  return (
    <Suspense fallback={<Spinner />}>
      <div className={styles.AdminPageContainer}>
        <hr className={styles.line} />
        <ul className={styles.adminMenuItems}>
          <li>
            <NavLink
              to={routes.ADMIN_ORDER_LISTS}
              className={styles.adminMenuItem}
              activeClassName={styles.adminMenuActiveItem}
            >
              <FormattedMessage id="orders.accepted" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.ADMIN_CREATE_PRODUCT}
              className={styles.adminMenuItem}
              activeClassName={styles.adminMenuActiveItem}
            >
              <FormattedMessage id="product.create" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={routes.ADMIN_UPDATE_PRODUCT}
              className={styles.adminMenuItem}
              activeClassName={styles.adminMenuActiveItem}
            >
              <FormattedMessage id="product.edit" />
            </NavLink>
          </li>
        </ul>
        <hr className={styles.line} />

        <Switch>
          <Route path={routes.ADMIN_ORDER_LISTS} component={AdminOrderList} />
          <Route
            path={routes.ADMIN_CREATE_PRODUCT}
            component={forExmCreateProd}
          />
          <Route
            path={routes.ADMIN_UPDATE_PRODUCT}
            component={AdminUpdateList}
          />
          <Redirect to={routes.ADMIN_ORDER_LISTS} />
        </Switch>
      </div>
    </Suspense>
  );
}

//Вариант 2 с якорями (пока не рабочая версия, попробовать React Router Hash Link)
// <div className={styles.AdminPageContainer}>
//   <hr className={styles.line} />
//   <ul className={styles.adminMenuItems}>
//     <li key="ADMIN_ORDER_LISTS">
//       <NavLink
//         to={{
//           pathname: routes.ADMIN_PAGE,
//           hash: "#adminOrdersList",
//           // state: { isAdmin:true }
//         }}
//         className={styles.adminMenuItem}
//         activeClassName={styles.adminMenuActiveItem}
//       >
//         Принятые заказы
//       </NavLink>
//     </li>
//     <li key="ADMIN_CREATE_PRODUCT">
//       <NavLink
//         to={{
//           pathname: routes.ADMIN_PAGE,
//           hash: "#acreateProd",
//         }}
//         className={styles.adminMenuItem}
//         activeClassName={styles.adminMenuActiveItem}
//       >
//         Создать новый продукт
//       </NavLink>
//     </li>
//     <li key="ADMIN_UPDATE_PRODUCT">
//       <NavLink
//         to={{
//           pathname: routes.ADMIN_PAGE,
//           hash: "#updateProd",
//         }}
//         className={styles.adminMenuItem}
//         activeClassName={styles.adminMenuActiveItem}
//       >
//         Редактировать продукт
//       </NavLink>
//     </li>
//   </ul>
//   <hr className={styles.line} />
//   <div id="adminOrdersList">Принятые заказы</div>
//   <AdminOrderList />
//   <hr className={styles.line} />
//   <div id="createProd">Cоздать новый продукт</div>
//   <forExmCreateProd />
//   <hr className={styles.line} />
//   <div id="updateProd">Редактировать продукт</div>
//   <forExmUpdateProd />
// </div>
