const DemosModel = require("../models/DemoModel");
const SubscribersModel = require("../models/SubscribeModel");
const ThirdPartyModel = require("../models/ThirdPartyModel");
const UsersModel = require("../models/UserModel");

class Utils {
  static async joinDemoList(req, res) {
    try {
      const { email } = req.body || {};
      if (!email) {
        return res.status(400).json({
          message: "Bad Request",
        });
      }

      const checkFromExistinglist = await DemosModel.findOne({
        email,
      });

      if (checkFromExistinglist) {
        return res.status(200).json({
          message: "Thank you! We already have your email in our demo list",
        });
      }

      const newData = await new DemosModel({ email }).save();

      if (newData) {
        return res.status(200).json({
          message: "Thank you! We will keep in touch",
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "An error occcurred",
      });
    }
  }

  static async joinSubscribers(req, res) {
    try {
      const { email } = req.body || {};
      if (!email) {
        return res.status(400).json({
          message: "Bad Request",
        });
      }

      const checkFromExistinglist = await SubscribersModel.findOne({
        email,
      });

      if (checkFromExistinglist) {
        return res.status(200).json({
          message: "Thank you! We already have your email in our demo list",
        });
      }

      const newData = await new SubscribersModel({ email }).save();

      if (newData) {
        return res.status(200).json({
          message: "Thank you! We will keep in touch",
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "An error occcurred",
      });
    }
  }

  static async fetchDemoList(req, res) {
    try {
      const waitlist = await DemosModel.find(
        {},
        {
          email: 1,
        }
      );

      return res.status(200).json({
        message: "Success",
        data: waitlist,
      });
    } catch (e) {
      return res.status(500).json({
        message: "An error occcurred",
      });
    }
  }

  static async fetchSubscribers(req, res) {
    try {
      const waitlist = await SubscribersModel.find(
        {},
        {
          email: 1,
        }
      );

      return res.status(200).json({
        message: "Success",
        data: waitlist,
      });
    } catch (e) {
      return res.status(500).json({
        message: "An error occcurred",
      });
    }
  }

  static async fetchWaitList(req, res) {
    try {
      const waitlist = await UsersModel.find(
        {},
        {
          email: 1,
          firstName: 1,
          lastName: 1,
        }
      );

      return res.status(200).json({
        message: "Success",
        data: waitlist,
      });
    } catch (e) {
      return res.status(500).json({
        message: "An error occcurred",
      });
    }
  }

  static async joinThirdPartyWaitlist(req, res) {
    try {
      const { email, firstName, lastName, industry, organization } =
        req.body || {};
      if (!email || !firstName || !lastName || !organization) {
        return res.status(400).json({
          message: "Bad Request",
        });
      }

      const checkFromExistinglist = await ThirdPartyModel.findOne({
        email,
      });

      if (checkFromExistinglist) {
        return res.status(200).json({
          message: "Thank you! We already have your email in our waitlist",
        });
      }

      const newData = await new SubscribersModel({
        email,
        firstName,
        lastName,
        industry,
        organization,
      }).save();

      if (newData) {
        return res.status(200).json({
          message: "Thank you for joining! We will keep in touch",
        });
      }
    } catch (e) {
      return res.status(500).json({
        message: "An error occcurred",
      });
    }
  }

  static async fetchThirdPartyWaitList(req, res) {
    try {
      const waitlist = await ThirdPartyModel.find(
        {},
        {
          email: 1,
          firstName: 1,
          lastName: 1,
          organization: 1,
          industry: 1,
        }
      );

      return res.status(200).json({
        message: "Success",
        data: waitlist,
      });
    } catch (e) {
      return res.status(500).json({
        message: "An error occcurred",
      });
    }
  }
}

module.exports = Utils;
