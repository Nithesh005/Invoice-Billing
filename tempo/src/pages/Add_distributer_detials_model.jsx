import { Modal } from "bootstrap";

const AddDistributerDetailsModal = () => {
  return (
    <>
      {/* <div className="modal-header" style={{ border: "none" }}>
        <h5 className="modal-title header_popup fnt_fam" id="AddMachineModal1">ADD MACHINE</h5>
      </div> */}
      <div className="modal-body">
        {/* Your existing content */}
        <div class="row">
          <div class="col-lg-6 box">
            <div class="input-box fieldStyle">
              <input type="text" class="form-control font_weight_modal" id="inputMachineName" name="inputMachineName" />
              <label for="inputMachineName" class="input_lable fnt_fam">Machine Name <span class="paddingm validate fnt_fam">*</span></label>
              <span class="paddingm float-start validate fnt_fam" id="inputMachineNameErr"></span>
              <span class="float-end charCount fnt_fam" id="inputMachineNameCunt"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 box">
            <div class=" input-box fieldStyle">
              <input type="text" class="form-control padin font_weight_modal" id="inputMachineRateHour" name="inputMachineRateHour" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" />
              <span class="unit-input"><i class="fa fa-inr clip" aria-hidden="true"></i></span>
              <label for="inputMachineRateHour" class="input_lable fnt_fam">Machine Rate Hour <span class="paddingm validate fnt_fam">*</span></label>
              <span class="paddingm float-start validate fnt_fam" id="inputMachineRateHourErr"></span>

            </div>
          </div>
          <div class="col-lg-3 box">
            <div class="input-box fieldStyle">
              <input type="text" class="form-control input padin font_weight_modal" id="inputMachineOffRateHour" name="inputMachineOffRateHour" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" />
              <span class="unit-input"><i class="fa fa-inr clip" aria-hidden="true"></i></span>
              <label for="inputMachineOffRateHour" class="input_lable fnt_fam">Machine OFF Rate Hour <span class="paddingm validate fnt_fam">*</span></label>
              <span class="paddingm float-start validate fnt_fam" id="inputMachineOffRateHourErr"></span>
              <span class="float-end charCount fnt_fam">0/50</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 box">
            <div class=" input-box fieldStyle">
              <input type="text" class="form-control input font_weight_modal paddinginright" id="inputTonnage" name="inputTonnage" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" />
              <label for="inputTonnage" class="input_lable fnt_fam">Tonnage <span class="paddingm validate fnt_fam">*</span></label>
              <span class="paddingm float-start validate fnt_fam" id="inputTonnageErr"></span>
              <span class="unit clip">T</span>
            </div>
          </div>
          <div class="col-lg-3 box">
            <div class="input-box fieldStyle">
              <input type="text" class="form-control input font_weight_modal" id="inputMachineBrand" name="inputMachineBrand" />
              <label for="inputMachineBrand" class="input_lable fnt_fam">Machine Brand <span class="paddingm validate fnt_fam">*</span></label>
              <span class="paddingm float-start validate fnt_fam" id="inputMachineBrandErr"></span>
              <span class="float-end charCount fnt_fam" id="inputMachineBrandCunt"></span>
            </div>
          </div>
          <div class="col-lg-6 box">
            <div class="input-box fieldStyle">
              <input type="text" class="form-control input font_weight_modal" id="inputMachineSerialId" name="inputMachineSerialId" onkeydown="key_down(event)" onpaste="check_white_space(event)" />
              <label htmlFor="inputMachineSerialId" className="input_label fnt_fam">
                Machine Serial ID <span className="paddingm validate fnt_fam">*</span>
              </label>

              <span class="paddingm float-start validate fnt_fam" id="inputMachineSerialId_err"></span>
              <span class="float-end charCount fnt_fam" id="inputMachineNameCunt">0 / 50</span>
            </div>
          </div>
        </div>
        {/* <div class="row" style="display:none;">
                <input type="text" class="form-control form-control-md" name="site_id" id="site_id_get_input" value="<?php echo $session->get('active_site'); ?>" />
              </div> */}
      </div>
    </>
  );
};

export default AddDistributerDetailsModal;
